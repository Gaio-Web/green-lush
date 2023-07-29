import { Typography, Button } from "@material-tailwind/react";

interface IFifthSectionProp {
  photoBase64: string | undefined;
  history: string | undefined;
  src: any;
  onClick: any;
  isAutonomous: string | undefined;
  mainColor: string | undefined;
  accentColor: string | undefined;
  coverKeyWords: string | undefined;
  fifthTitle: string | undefined;
  fifthButtonText: string | undefined;
  convertedName: string | undefined
}

export function ContentSectionOne({isAutonomous, convertedName, fifthTitle, mainColor, accentColor, photoBase64, history, fifthButtonText, src, onClick, coverKeyWords}: IFifthSectionProp) {
  return (
    <section className="">
      <div className="container mx-auto grid items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:mt-0 lg:pr-12">
          <Typography color="blue" className="mb-2 !font-semibold">
            Minha história
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-6">
            No lugar certo na hora certa
          </Typography>
          <Typography variant="lead" color="gray" className="mb-12">
            { history }
          </Typography>
        </div>
        <img
          src={photoBase64}
          alt="team work"
          className=" h-1/5 min-h-[50vh] w-full rounded-xl object-cover object-center md:min-h-[75vh]"
        />
      </div>
    </section>
  );
}

export default ContentSectionOne;