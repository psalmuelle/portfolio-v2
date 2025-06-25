'use client';
import Section from './Section';
import formatDate from '@/utils/dateFormatter';
import { useQuery } from '@apollo/client';
import { GET_WORK_EXPERIENCE } from '@/lib/graphql/queries';
import { ExperienceProps } from '@/utils/types';

export default function WorkExperienceSection() {
  const { data } = useQuery<{
    workExperienceCollection: { items: ExperienceProps[] };
  }>(GET_WORK_EXPERIENCE);

  console.log(data?.workExperienceCollection.items);

  return (
    <>
      <Section title="Work Experience">
        <div className="mt-6 md:mt-8">
          {data?.workExperienceCollection?.items.map((experience, index) => (
            <div key={index} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="border-primary-900/50 z-10 flex h-[18px] w-[18px] rounded-full border-2 bg-white" />
                {index < data?.workExperienceCollection?.items.length - 1 && (
                  <div className="from-primary-900/50 to-primary-900/30 w-0.5 grow bg-gradient-to-b" />
                )}
              </div>
              <div className={'pb-8'}>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-medium">
                    👨‍💻 {experience?.role} | {experience?.company}
                  </h3>
                  <p className="text-sm text-gray-700">
                    🌍 {experience?.location}
                  </p>
                  <p className="mb-2 text-xs text-gray-500">
                    📅 {formatDate(experience?.startDate)} -{' '}
                    {experience?.endDate
                      ? formatDate(experience?.endDate)
                      : 'Present'}
                  </p>
                </div>
                <div className="bg-primary-100 mt-2 rounded-xl p-4 text-sm">
                  {experience?.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
