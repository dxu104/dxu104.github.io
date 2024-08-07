import '../css/Experience.css';

const Experience = () => {
    return (
        <main className="main" id='main-content'>
            <img className='content__img' src="work.jpg" alt="A photo about the work experience" />
            {/* <h2 className='experience__title'>Experience</h2> */}



            <div className="resume">
                <section className="experience">
                        <p className='experience__text'>
                            <span className='company__name'>MemVerge, Inc.</span>
                            <span className='company__location'>|   Milpitas, California</span>
                            <span className='company__enrollment'>May. 2024 – Dec.2024</span>
                        </p>
                        <p className="title">Software Engineer</p>
                        <ul >
                            <li>
                                Designed and implemented a scalable inference solution utilizing LlamaIndex with MemVerge Memory Machine. The solution allocates additional CXL memory to the vector database process via NUMA, leveraging the low latency, high bandwidth, and extensive memory capabilities of CXL to improve LLM performance. 
                            </li>
                            <li>
                                Designed an algorithm to convert SJM job files into Nextflow scripts, facilitating seamless pipeline execution for AWS customers impacted by the discontinuation of SGE support in AWS ParallelCluster. This solution retained existing AWS customers and generated over $500K in revenue for the company.
                            </li>
                        </ul>
                </section>

                <section className="experience">
                    <p className='experience__text'>
                        <span className='company__name'>Northeastern University College of Engineering</span>
                        <span className='company__location'>|   Boston,MA</span>
                        <span className='company__enrollment'>Jan. 2024 - May. 2024</span>
                    </p>
                    <p className="title">Graduate Teaching Assistant for Cloud Computing and Network Structures (Part-time)</p>
                    <ul>
                        <li>Led instructional sessions focusing on Git, CI/CD and AWS&GCP Services, providing academic support to a group of 200 students in their projects and classwork.</li>
                        <li>Mentored students in the establishment and development of AWS&GCP infrastructure, leveraging tools like Terraform, and Packer.</li>
                    </ul>
                </section>

                <section className="experience">
                    <p className='experience__text'>
                        <span className='company__name'>MDI Biological Laboratory</span>
                        <span className='company__location'>|   Bar Harbor, Maine</span>
                        <span className='company__enrollment'>Jul. 2023 – Dec. 2023</span>
                    </p>
                    <p className="title">Software Engineer Co-op</p>
                    <ul>
                        <li>Collected RNA-seq data on axolotls from diverse biological experiments, serving as a vital dataset input (1 TB).</li>
                        <li>Developed a distinctive nf-core module and a transcriptome annotation pipeline based on the RNASeq pipeline utilizing Python, NextFlow, and Groovy, enhancing computational resource efficiency and reducing processing time.</li>
                        <li>Designed an innovative subworkflow featuring a custom insertion, search, sort algorithm, which significantly enhanced the data integration process.</li>
                        <li>Automated the entire data integration workflow with NextFlow pipelines, harnessing the capabilities of AWS Batch and Terraform. Achieved up to 80% cost savings on On-demand EC2 instances by deploying stateful workloads on Spot instances via Mamory Machine Cloud.</li>
                    </ul>
                </section>

                <section className="experience">
                    <p className='experience__text'>
                        <span className='company__name'>Syracuse University College of Engineering and Computer Science</span>
                        <span className='company__location'>|   Syracuse, NY</span>
                        <span className='company__enrollment'>Jan. 2021 - Aug. 2022</span>
                    </p>
                    <p className="title">Graduate Research Assistant – Mentor: Distinguished Prof. Charles T. Driscoll</p>
                    <ul>
                        <li>Utilized R to analyze 60 years of environmental monitoring data, comprising of over 1 billion data points.</li>
                        <li>Developed hundreds of R scripts and functions to clean, process and visualize the data using ggplot2 and dplyr.</li>
                        <li>Wrote a peer-review paper and made a presentation at the HUBBARD BROOK ECOSYSTEM STUDY 59th ANNUAL COOPERATORS’ MEETING.</li>
                    </ul>
                </section>

            </div>

            
        </main>
    );
}





export default Experience;