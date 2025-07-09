export function simulateLegalQueryAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text:
              "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
            source: "dani_devi.pdf — See Paragraph 7",
            link:
              "/pdfjs/web/viewer.html?file=/pdfs/dani_devi.pdf#page=2&search=10%25%20of%20annual%20income"
          }
        ]
      });
    }, 1000);
  });
}
