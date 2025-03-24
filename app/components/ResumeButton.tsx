
import { Button } from '@mantine/core';

export default function ResumeButton() {
    return (
        <Button
            component="a"
            variant='transparent'
            href="./assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            color="rgba(92, 230, 209)"
            className="hover:shadow-lg hover:scale-[1.02] bg-[#2a2a40] text-white hover:bg-[#4a4ae0] font-bold rounded-lg transition ease-in-out duration-300 px-4 py-2"
            rightSection={<span className="ml-2">↗</span>}
        >
            View Full Resume
        </Button>
    );
}