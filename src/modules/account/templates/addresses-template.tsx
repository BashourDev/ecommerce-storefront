"use client"

import { useAccount } from "@lib/context/account-context"
import AddressBook from "../components/address-book"
import { useTranslations } from "next-intl"

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  const t = useTranslations("AccountAddresses")

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">{t("shippingAddresses")}</h1>
        <p className="text-base-regular">{t("subtitle")}
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
