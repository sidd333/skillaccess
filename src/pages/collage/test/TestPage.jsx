import React from "react";

import { Test } from "../../../components/collage/test/home/Test";

import CollageLayout from "../../../layout/Collage";

const TestPage = () => {
  React.useEffect(() => {
   
    let scriptLoaded = false;

    let script = document.createElement("script");
    const loadGoogleTranslateScript = () => {
      if (!scriptLoaded) {
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onload = () => {
          window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,hi,bn,ta,te,mr,gu,kn,ur,pa,ml,or", // Add more languages as needed
              },
              "google_translate_element"
            );
          };
        };

        document.body.appendChild(script);
        scriptLoaded = true;
      }
    };
    loadGoogleTranslateScript();


  return () => {
    // Clean up script when component unmounts
    if (scriptLoaded) {
      document.body.removeChild(script);
      scriptLoaded = false;
    }
  };
}, []);
  return (
    <CollageLayout>
      <Test />
    </CollageLayout>
  );
};

export default TestPage;
