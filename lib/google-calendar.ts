import { google } from "googleapis";

type CreateEventArgs = {
  summary: string;          // "Individual Therapy Session" | "Couples Therapy Session"
  date: string;             // "YYYY-MM-DD"
  time: string;             // "HH:mm" (24h) in GMT
  durationMins: number;     // e.g., 50
  attendeeEmail?: string;   // optional
};

/**
 * Creates a Google Calendar event with a Google Meet link.
 * Expects these env vars:
 * - GOOGLE_CLIENT_EMAIL
 * - GOOGLE_PRIVATE_KEY
 * - GOOGLE_CALENDAR_ID
 */
export async function createGoogleCalendarEvent({
  summary,
  date,
  time,
  durationMins,
  attendeeEmail,
}: CreateEventArgs) {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!clientEmail || !privateKey || !calendarId) {
    throw new Error(
      "Missing Google env vars. Set GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_CALENDAR_ID."
    );
  }

  // Handle escaped newlines in the private key (Vercel/ENV safe)
  privateKey = privateKey.replace(/\\n/g, "\n");

  const jwt = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth: jwt });

  // Build start/end in **GMT** (Z = UTC/GMT)
  const startISO = `${date}T${time}:00.000Z`;
  const endDate = new Date(startISO);
  endDate.setUTCMinutes(endDate.getUTCMinutes() + durationMins);
  const endISO = endDate.toISOString();

  const attendees = attendeeEmail ? [{ email: attendeeEmail }] : undefined;

  const event = {
    summary,
    description: "Online session via Google Meet",
    start: {
      dateTime: startISO,
      timeZone: "Etc/Greenwich", // explicit GMT
    },
    end: {
      dateTime: endISO,
      timeZone: "Etc/Greenwich",
    },
    attendees,
    conferenceData: {
      createRequest: {
        requestId: `meet-${Date.now()}`,
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    },
  };

  const res = await calendar.events.insert({
    calendarId,
    requestBody: event,
    conferenceDataVersion: 1,
    sendUpdates: "all", // emails the attendee the invitation
  });

  return res.data; // contains the Meet link in conferenceData.entryPoints
}

// Backwards/alternative name (so either import works)
export const createMeetEvent = createGoogleCalendarEvent;
