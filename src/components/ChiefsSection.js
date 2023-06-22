import ChiefCard from "./ChiefCard";

export default function ChiefsSection() {
  const chiefs = [
    {
      name: "Juan Carlos",
      img: "/img/top-chiefs/img_1.jpg",
      yearsOfExperience: "15y",
      recipesCount: "10",
      cuisine: "American",
      likeCount: "65",
    },
    {
      name: "John Doe",
      img: "/img/top-chiefs/img_2.jpg",
      yearsOfExperience: "10y",
      recipesCount: "05",
      cuisine: "American",
      likeCount: "60",
    },
    {
      name: "Erich Maria",
      img: "/img/top-chiefs/img_3.jpg",
      yearsOfExperience: "7y",
      recipesCount: "13",
      cuisine: "American",
      likeCount: "55",
    },
    {
      name: "Chris Brown",
      img: "/img/top-chiefs/img_4.jpg",
      yearsOfExperience: "5y",
      recipesCount: "08",
      cuisine: "American",
      likeCount: "45",
    },
    {
      name: "Blake Lively",
      img: "/img/top-chiefs/img_5.jpg",
      yearsOfExperience: "5y",
      recipesCount: "09",
      cuisine: "American",
      likeCount: "50",
    },
    {
      name: "Ben Affleck",
      img: "/img/top-chiefs/img_6.jpg",
      yearsOfExperience: "5y",
      recipesCount: "04",
      cuisine: "American",
      likeCount: "40",
    },
  ];
  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">
        {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
        {chiefs.map((chief) => (
          <ChiefCard key={chief.name} chief={chief} />
        ))}
      </div>
    </div>
  );
}
