import { enviroment } from "../../config";

export class DiscordService {
  private readonly discordWebhookUrl = enviroment.DISCORD_WEBHOOK_URL;
  constructor() {}
  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2Jlc3A4czN5dXNhbGNiYXB5NzY2MjRyNDgxamNubmVpbndrN3BydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8hsxi1ERBMZxV3dAuU/giphy.gif",
          },
        },
      ],
    };
    const response = await fetch(this.discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      console.log("Error sending message to discord");
      return false;
    }
    return true;
  }
}
