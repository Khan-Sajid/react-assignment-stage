import styles from "./page.module.css";
import { getCarouselData, getRowData } from "../utilities/service";
import RowContent from "@/components/rowContent/rowContent";
import CarouselBanner from "@/components/carouselBanner/carouselBanner";
import Header from "@/components/header/header";

export default async function Home() {
  const carouselData = await getCarouselData();
  const rowData = await getRowData();
  return (
    <main className={styles.main}>
      <Header />
      <CarouselBanner data={carouselData} />
      <RowContent
        data={rowData}
        sectionHeading={"section 1"}
        numberNeeded={true}
      />
      <RowContent data={rowData} sectionHeading={"section 2"} />
      <RowContent data={rowData} sectionHeading={"section 3"} />
      <RowContent data={rowData} sectionHeading={"section 4"} />
    </main>
  );
}
