import React from "react";

export default function Brands() {
  return (
    <div className="ms-3">
      <h3 className="my-2">Brands</h3>
      <div className="border-top border-2 my-3"></div>

      <h4> A </h4>
      <div className="row">
        {["Apple", "Audi", "Ableton", "Anvil", "Acer", "Asus"].map((prod) => (
          <h6 key={prod} className="col mt-1">
            {prod}
          </h6>
        ))}
      </div>

      <div className="border-top my-2"></div>

      <h4> B </h4>
      <div className="row">
        {["Banana", "Bently", "Bronx", "Bevil", "Bunch", "Benq"].map((prod) => (
          <h6 key={prod} className="col mt-1">
            {prod}
          </h6>
        ))}
      </div>

      <div className="border-top my-2"></div>

      <h4> C </h4>
      <div className="row">
        {["Canvas", "Canter", "Cider", "Club", "Chaffer", "Crest"].map((prod) => (
          <h6 key={prod} className="col mt-1">
            {prod}
          </h6>
        ))}
      </div>

      <div className="border-top my-2"></div>

      <h4> D </h4>
      <div className="row">
        {["Devine", "Delar", "Dante", "Dloren", "Dill", "Driller"].map((prod) => (
          <h6 key={prod} className="col mt-1">
            {prod}
          </h6>
        ))}
      </div>

      <div className="border-top my-2"></div>

      <h4> E </h4>
      <div className="row">
        {["Evolve", "Enter", "Eque", "Eau", "Edaquer", "Eclipse"].map((prod) => (
          <h6 key={prod} className="col mt-1">
            {prod}
          </h6>
        ))}
      </div>

      <div className="border-top my-2"></div>

      <h4> F </h4>
      <div className="row">
        {["Faneto", "Finder", "Flanter", "Faquer", "Fresho", "Forento"].map((prod) => (
          <h6 key={prod} className="col mt-1">
            {prod}
          </h6>
        ))}
      </div>

      <div className="border-top my-2"></div>

      <h4> G  </h4>
      <div className="row">
        {["Grace", "Glasscow", "Griter", "Gaquer", "Gewto", "Gistique"].map((prod) => (
          <h6 key={prod} className="col mt-1">
            {prod}
          </h6>
        ))}
      </div>

      <div className="border-top my-2"></div>

      <h4> H   </h4>
      <div className="row">
        {["Hellen", "Homelander", "Houser", "Hintque", "Hauntser", "Huer"].map((prod) => (
          <h6 key={prod} className="col mt-1">
            {prod}
          </h6>
        ))}
      </div>

      <div className="border-top my-2"></div>
    </div>
  );
}
