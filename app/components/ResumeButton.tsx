
import { Button } from '@mantine/core';

export default function ResumeButton() {
    return (
        <Button
            component="a"
            variant='transparent'
            href="https://www.linkedin.com/in/fuyuki-matsubara-0a64301ab/"
            target="_blank"
            rel="noopener noreferrer"
            color="#10b981"
            className="hover:shadow-lg hover:scale-[1.02] bg-[#2a2a40] text-emerald-400 hover:text-emerald-400 font-bold rounded-lg transition ease-in-out duration-300 px-4 py-2"
            rightSection={<span className="ml-2">↗</span>}
        >
            View Full Resume
        </Button>
    );
}