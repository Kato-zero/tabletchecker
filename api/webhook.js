export default async function handler(req, res) {
  console.log("Webhook received:", req.body);

  // You’ll log + inspect first, then we’ll store in DB later
  res.status(200).json({ received: true });
}
