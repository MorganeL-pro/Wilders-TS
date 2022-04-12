interface IWilder {
    _id: string;
    name: string;
    city: string;
    skills: ISkill[]
}

interface ISkill {
    title: string;
    votes: number;
    _id?: string;
}

type WilderProps = {
    _id: string;
    name: string;
    city: string;
    skills: SkillProps[]
}

type SkillProps = {
    _id: string;
    title: string;
    votes: number
}

type InitialDataState = {
    name: string;
    city: string;
    skills: ISkill[]
}

type InitialSkills = string[];
