import { Container } from "@mantine/core";


type InternalGuideProps = {
    title: string;
    id: string;
};

type ExternalGuideProps = {
    title: string;
    link: string;
};

export const InternalGuide = ({ title, id }: InternalGuideProps) => {
    return (
        <Container className="space-y-10">
            {/* リンク部分 */}
            <a href={id} className="flex items-center space-x-4 group">
                {/* 左側の線 */}
                <div className="relative w-8 h-px bg-gray-400 transition-all duration-300 group-hover:w-20 group-hover:text-white">
                    {/* hoverで線の長さが伸びる */}
                </div>
                {/* 右側のテキスト */}
                <p className="text-sm cursor-pointer text-slate-400 group-hover:text-white font-semibold">{title}</p>
            </a>
        </Container>
    )

}

export const ExternalGuide = ({ title, link }: ExternalGuideProps) => {
    return (
        <Container className="space-y-10">
            {/* リンク部分 */}
            <a href={link} className="flex items-center space-x-4 group">
                {/* 左側の線 */}
                <div className="relative w-8 h-px bg-gray-400 transition-all duration-300 group-hover:w-20 group-hover:text-white">
                    {/* hoverで線の長さが伸びる */}
                </div>
                {/* 右側のテキスト */}
                <p className="text-sm cursor-pointer text-slate-400 group-hover:text-white font-semibold">{title}</p>
            </a>
        </Container>
    )

}