import { Flex, Badge } from "@mantine/core";

type TimelineCardProps = {
    isSp: boolean;
    title: string;
    affiliation: string;
    date: string;
    description: string;
    tags: string[];
};

const TimelineCard = ({ isSp = false, title, affiliation, date, description, tags }: TimelineCardProps) => {

    if (isSp) {
        return (
            <Flex
                direction={"column"}
                align={"flex-start"}
                gap={"10"}
                className="mb-10 transition duration-300 ease-in-out transform hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] rounded-2xl p-4 group"
            >
                <p className="text-sm font-light text-slate-400 ">{date}</p>
                <p className="font-semibold text-white group-hover:text-[#5CE6D1] mb-2">{title}・{affiliation}</p>
                <p className="text-sm font-light text-slate-400 mb-2">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            color="#10b981"
                            variant="outline"
                            className="mt-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black transition duration-300 ease-in-out transform"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>

            </Flex>);
    } else {
        return (
            <Flex
                direction={"row"}
                align={"flex-start"}
                gap={"50"}
                className="mb-8 transition duration-300 ease-in-out transform hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] rounded-2xl p-4 group"
            >
                <div className="w-1/4">
                    <p className="text-sm font-light text-slate-200 my-0.5">{date}</p>
                </div>
                <div className="w-3/4">
                    <h3 className="font-semibold text-white group-hover:text-[#5CE6D1] mb-2">{title}・{affiliation}</h3>
                    <p className="text-sm font-light text-slate-200 mb-2">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                color="#10b981"
                                variant="outline"
                                className="mt-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black transition duration-300 ease-in-out transform"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Flex>
        );
    }
};

export default TimelineCard;