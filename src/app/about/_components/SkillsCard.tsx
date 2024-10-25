import Image from "next/image";

const SkillsCard = ({ img, skill }: { img: string; skill: string }) => {
  return (
    <div className="bg-transparant flex w-fit items-center gap-2 rounded-full px-4 py-2 font-medium text-white shadow-md shadow-[#3C3D37]">
      <Image
        src={`/skill/${img}`}
        alt="Skill Image"
        width={200}
        height={200}
        className="h-8 w-8 object-cover"
      />
      <p>{skill}</p>
    </div>
  );
};

export default SkillsCard;
