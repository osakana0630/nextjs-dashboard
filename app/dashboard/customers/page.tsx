import { fetchLatestInvoices } from '@/app/lib/data';

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  return <p>Customers Page</p>;
}
