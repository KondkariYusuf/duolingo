import { auth } from "@clerk/nextjs/server";

export const getIsAdmin = async () => {
  const { userId } = await auth();
  const rawAdminIds = process.env.CLERK_ADMIN_IDS ?? ""; // stored in .env.local file as string separated by comma(,) and space( )
  const adminIds = rawAdminIds ? rawAdminIds.split(", ") : [];

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
