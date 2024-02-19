import styles from "./page.module.css";
import { getCarouselData, getRowData } from "../utilities/service";
import RowContent from "@/components/rowContent/rowContent";
import CarouselBanner from "@/components/carouselBanner/carouselBanner";

export default async function Home() {
  const carouselData = await getCarouselData();
  const rowData = await getRowData();
  return (
    <main className={styles.main}>
      <CarouselBanner data={carouselData} />
      <RowContent data={rowData} />
    </main>
  );
}
