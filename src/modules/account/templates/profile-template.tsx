"use client"

import { useAccount } from "@lib/context/account-context"
import ProfileEmail from "@modules/account/components/profile-email"
import ProfileName from "@modules/account/components/profile-name"
import ProfilePassword from "@modules/account/components/profile-password"
import ProfileBillingAddress from "../components/profile-billing-address"
import ProfilePhone from "../components/profile-phone"
import { useTranslations } from "next-intl"

const ProfileTemplate = () => {
  const { customer, retrievingCustomer, refetchCustomer } = useAccount()
  const t = useTranslations("AccountProfile");
  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">{t("profile")}</h1>
        <p className="text-base-regular">{t("subtitle")}
        </p>
      </div>
      <div className="flex flex-col gap-y-8 w-full">
        <ProfileName customer={customer} />
        <Divider />
        <ProfileEmail customer={customer} />
        <Divider />
        <ProfilePhone customer={customer} />
        <Divider />
        <ProfilePassword customer={customer} />
        <Divider />
        <ProfileBillingAddress customer={customer} />
      </div>
    </div>
  )
}

const Divider = () => {
  return <div className="w-full h-px bg-gray-200" />
}

export default ProfileTemplate
