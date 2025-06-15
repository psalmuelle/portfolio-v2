import Section from './Section';

export default function ContactSection() {
  return (
    <div>
      <Section
        title="Contact"
        children={
          <div className="mt-6 text-lg md:mt-8">
            <div>
              I would love to hear from you! Whether you have a question, or
              want to collaborate, feel free to reach out.
              <br />
              <a
                href="mailto:psalmuelle1@gmail.com"
                className="font-bold text-green-900 hover:underline"
              >
                psalmuelle1@gmail.com
              </a>
            </div>
          </div>
        }
      />
    </div>
  );
}
