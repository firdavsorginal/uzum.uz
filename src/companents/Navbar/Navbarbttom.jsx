const DATA = [
  "Muddatli to'lov",
  "Elektronika",
  "Maishiy tehnika",
  "Kiyim",
  "Poyabzallar",
  "Aksessuarlar",
  "Goʻzallik va parvarish",
  "Salomatlik",
  "Uy ro'zg'or buyumlari",
  "Qurilish va ta'minlash",
];

const Navbarbttom = () => {
  return (
    <div className="navbarbottom">
      <div className="container">
        <div className="navbarbottom-wrapper">
          {DATA.map((item, index) => {
            return <p key={index}> {item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbarbttom;
