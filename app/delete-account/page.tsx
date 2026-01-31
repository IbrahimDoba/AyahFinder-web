import type { Metadata } from "next";
import DeleteAccountForm from "./DeleteAccountForm";

export const metadata: Metadata = {
  title: "Delete Account - Ayahfinder",
  description:
    "Request deletion of your Ayahfinder account and all associated data.",
  keywords: [
    "delete account",
    "account deletion",
    "remove account",
    "data deletion",
  ],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://getayahfinder.com/delete-account",
  },
};

export default function DeleteAccount() {
  return <DeleteAccountForm />;
}
