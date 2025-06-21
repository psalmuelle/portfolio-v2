import Section from './Section';
import formatDate from '@/utils/dateFormatter';

const experienceData = [
  {
    title: 'Frontend Engineer',
    company: 'Weboard',
    location: 'Lagos, Nigeria',
    startDate: '2025-01-14T00:00:00Z',
    endDate: '',
    description: `In my previous role as a Frontend Engineer, I was responsible for developing and maintaining user interfaces for web applications. I collaborated with designers to implement responsive designs and ensured cross-browser compatibility. My work involved optimizing performance and enhancing user experience through efficient coding practices.`,
  },
  {
    title: 'Backend Engineer',
    company: 'WebCorp',
    location: 'Remote',
    startDate: '2024-01-14T00:00:00Z',
    endDate: '2025-01-14T00:00:00Z',
    description: `As a Backend Engineer, I focused on building and maintaining the server-side logic of web applications. I worked with databases, APIs, and cloud services to ensure seamless data flow and application performance. My role required strong problem-solving skills and the ability to work collaboratively with frontend developers and other stakeholders.`,
  },
  {
    title: 'Full Stack Developer',
    company: 'Tech Solutions',
    location: 'Remote',
    startDate: '2023-01-14T00:00:00Z',
    endDate: '2024-01-14T00:00:00Z',
    description: `In my role as a Full Stack Developer, I was responsible for both frontend and backend development. I designed and implemented user interfaces while also managing server-side logic and database interactions. This position required a deep understanding of web technologies and the ability to work across the entire stack.`,
  },
];

export default function WorkExperienceSection() {
  return (
    <>
      <Section title="Work Experience">
        <div className="mt-6 md:mt-8">
          {experienceData.map((experience, index) => (
            <div key={index} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="border-primary-900/50 z-10 flex h-[18px] w-[18px] rounded-full border-2 bg-white" />
                {index < experienceData.length - 1 && (
                  <div className="from-primary-900/50 to-primary-900/30 w-0.5 grow bg-gradient-to-b" />
                )}
              </div>
              <div className={'pb-8'}>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-medium">
                    👨‍💻 {experience.title} | {experience.company}
                  </h3>
                  <p className="text-sm text-gray-700">
                    🌍 {experience.location}
                  </p>
                  <p className="mb-2 text-xs text-gray-500">
                    📅 {formatDate(experience.startDate)} -{' '}
                    {experience.endDate
                      ? formatDate(experience.endDate)
                      : 'Present'}
                  </p>
                </div>
                <div className="bg-primary-100 mt-2 rounded-xl p-4 text-sm">
                  {experience.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
