import { Card, CardContent } from "@/components/ui/card";

export default function AboutMe() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <img
              src="/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo.svg"
              alt="John Doe"
              width={800}
              height={800}
              //   className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                <p className="text-muted-foreground">
                  I'm John Doe, a passionate software developer with 5 years of
                  experience in creating robust and scalable web applications.
                  My journey in tech started with a curiosity about how things
                  work, which led me to pursue a degree in Computer Science and
                  dive headfirst into the world of programming.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">My Expertise</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Full-stack web development (React, Node.js, Express)</li>
                  <li>Database design and management (SQL, MongoDB)</li>
                  <li>RESTful API development and integration</li>
                  <li>Cloud services (AWS, Google Cloud Platform)</li>
                  <li>Agile methodologies and project management</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">My Approach</h3>
                <p className="text-muted-foreground">
                  I believe in writing clean, maintainable code and constantly
                  learning new technologies. My approach to problem-solving
                  involves breaking down complex issues into manageable parts
                  and collaborating closely with team members to find innovative
                  solutions. I'm passionate about creating user-centric
                  applications that not only meet but exceed client
                  expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
