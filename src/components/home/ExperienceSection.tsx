import Section from './Section';

export default function WorkExperienceSection() {
  return (
    <div>
      <Section
        title="Work Experience"
        children={
          <div>
            <p className="text-neutral-600">
              I have worked with several companies, startups, and organizations,
              building web and mobile applications. My experience includes
              working with React.js, React Native, and other modern web
              technologies.
            </p>
            <ul className="mt-4 list-disc pl-6 text-neutral-600">
              <li>Frontend Engineer at Company A</li>
              <li>React Native Developer at Company B</li>
              <li>Web Developer at Company C</li>
            </ul>
          </div>
        }
      />
    </div>
  );
}
