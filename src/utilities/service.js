export async function getCarouselData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v23/assignment/carousel-data`
  );
  if (!res.ok) {
    throw new Error("Fialed to fetch data");
  }
  return await res.json();
}

export async function getRowData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v23/assignment/row-data`
  );
  if (!res.ok) {
    throw new Error("Fialed to fetch data");
  }
  return await res.json();
}
