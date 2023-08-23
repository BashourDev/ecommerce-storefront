import { useTranslations } from "next-intl"
import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  const t = useTranslations("AccountOrders");
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">{t("orders")}</h1>
        <p className="text-base-regular">{t("subtitle")}
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
