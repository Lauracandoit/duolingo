import { auth } from "@clerk/nextjs"
const adminIds = [
    "user_2eaKQ0ezeWTOp1XUJFmFaWgbyeQ",
]
export const isAdmin = async () => {
    const { userId } = await auth();
    if (!userId) {
        return false;
    }
    return adminIds.indexOf(userId) !== -1;
}