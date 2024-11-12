const dummyItems = [
  {
    id: 1,
    title: "item 1",
    content: "item 1 content",
  },
  {
    id: 2,
    title: "item 2",
    content: "item 2 content",
  },
  {
    id: 3,
    title: "item 3",
    content: "item 3 content",
  },
];

export async function load({ params }) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    items: dummyItems,
  };
}
