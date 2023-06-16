import { Component } from '@angular/core';

interface Pregunta {
  pregunta: string;
  opciones: string[];
}

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  preguntasSeleccionadas: Pregunta[] = [];
  preguntasAleatorias: Pregunta[] = [];
  preguntaActual: number = 0;
  respuestasSeleccionadas: string[][] = [];
  mostrarRespuestaIncorrecta: boolean = false;
  mostrarSiguiente: boolean = false;
  mostrarPreguntas: boolean = true;
  preguntasCompletadas: boolean = false;
  mostrarGracias: boolean = false;
  mostrarPreguntaVolver: boolean = true;

  preguntas: Pregunta[] = [
    {
      pregunta: "A company is planning to run a global marketing application in the AWS Cloud. The application will feature videos that can be viewed by users. The company must ensure that all users can view these videos with low latency. Which AWS service should the company use to meet this requirement?",
      opciones: ["*Amazon CloudFront", " AWS Auto Scaling", " Amazon Kinesis Video Streams", " Elastic Load Balancing"]
    },
    {
      pregunta: "Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?",
      opciones: ["*Reliability", " Security", " Performance efficiency", " Cost optimization"]
    },
    {
      pregunta: "Which of the following are benefits of migrating to the AWS Cloud? (Choose two.)",
      opciones: ["*Operational resilience", "*Business agility", " Discounts for products on Amazon.com", " Business excellence", " Increased staff retention"]
    },
    {
      pregunta: "A company is planning to replace its physical on-premises compute servers with AWS serverless compute services. The company wants to be able to take advantage of advanced technologies quickly after the migration. Which pillar of the AWS Well-Architected Framework does this plan represent?",
      opciones: ["*Performance efficiency", " Security", " Operational excellence", " Reliability"]
    },
    {
      pregunta: "A large company has multiple departments. Each department has its own AWS account. Each department has purchased Amazon EC2 Reserved Instances. Some departments do not use all the Reserved Instances that they purchased, and other departments need more Reserved Instances than they purchased. The company needs to manage the AWS accounts for all the departments so that the departments can share the Reserved Instances. Which AWS service or tool should the company use to meet these requirements?",
      opciones: ["*Cost Explorer", " AWS Systems Manager", " AWS Trusted Advisor", " AWS Organizations"]
    },
    {
      pregunta: "Which component of the AWS global infrastructure is made up of one or more discrete data centers that have redundant power, networking, and connectivity?",
      opciones: ["*Availability Zone", " AWS Region", " Edge location", " AWS Outposts"]
    },
    {
      pregunta: "Which duties are the responsibility of a company that is using AWS Lambda? (Choose two.)",
      opciones: ["*Security inside of code", "*Writing and updating of code", " Selection of CPU resources", " Patching of operating system", " Security of underlying infrastructure"]
    },
    {
      pregunta: "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)",
      opciones: ["*EC2 Amazon Machine Images (AMIs)", "*Amazon Elastic Block Store (Amazon EBS) snapshots", " Reserved Instances", " AWS Shield", " Amazon GuardDuty"]
    },
    {
      pregunta: "A company is migrating to the AWS Cloud instead of running its infrastructure on premises. Which of the following are advantages of this migration? (Choose two.)",
      opciones: ["*Increased global reach and agility", "*Elimination of the cost of IT staff members", " Elimination of the need to perform security auditing", " Ability to deploy globally in minutes", " Redundancy by default for all compute services"]
    },
    {
      pregunta: "A user is comparing purchase options for an application that runs on Amazon EC2 and Amazon RDS. The application cannot sustain any interruption. The application experiences a predictable amount of usage, including some seasonal spikes that last only a few weeks at a time. It is not possible to modify the application. Which purchase option meets these requirements MOST cost-effectively?",
      opciones: ["*Buy Reserved Instances for the predicted amount of usage throughout the year. Allow any seasonal usage to run on Spot Instances.", " Review the AWS Marketplace and buy Partial Upfront Reserved Instances to cover the predicted and seasonal load.", " Buy Reserved Instances for the predicted amount of usage throughout the year. Allow any seasonal usage to run at an On-Demand rate.", " Buy Reserved Instances to cover all potential usage that results from the seasonal usage"]
    },
    {
      pregunta: "A company wants to review its monthly costs of using Amazon EC2 and Amazon RDS for the past year. Which AWS service or tool provides this information?",
      opciones: ["*Cost Explorer", " AWS Trusted Advisor", " Amazon Forecast", " Amazon CloudWatch"]
    },
    {
      pregunta: "A company wants to migrate a critical application to AWS. The application has a short runtime. The application is invoked by changes in data or by shifts in system state. The company needs a compute solution that maximizes operational efficiency and minimizes the cost of running the application. Which AWS solution should the company use to meet these requirements?",
      opciones: ["*AWS Lambda", " Amazon EC2 On-Demand Instances", "Amazon EC2 Reserved Instances", " Amazon EC2 Spot Instances"]
    },
    {
      pregunta: "Which AWS service or feature allows users to connect with and deploy AWS services programmatically?",
      opciones: ["*AWS software development kits (SDKs)", " AWS Management Console", " AWS Cloud9", " AWS CodePipeline"]
    },
    {
      pregunta: "A company plans to create a data lake that uses Amazon S3. Which factor will have the MOST effect on cost?",
      opciones: ["*The selection of S3 storage tiers", " Charges to transfer existing data into Amazon S3", " The addition of S3 bucket policies", " S3 ingest fees for each request"]
    },
    {
      pregunta: "A company is launching an ecommerce application that must always be available. The application will run on Amazon EC2 instances continuously for the next 12 months. What is the MOST cost-effective instance purchasing option that meets these requirements?",
      opciones: ["*Savings Plans", " Spot Instances", " Dedicated Hosts", " On-Demand Instances"]
    },
    {
      pregunta: "Which AWS service or feature can a company use to determine which business unit is using specific AWS resources?",
      opciones: ["*Cost allocation tags", " Key pairs", " Amazon Inspector", " AWS Trusted Advisor"]
    },
    {
      pregunta: "A company wants to migrate its workloads to AWS, but it lacks expertise in AWS Cloud computing. Which AWS service or feature will help the company with its migration?",
      opciones: ["*AWS Managed Services", " AWS Trusted Advisor", " AWS Consulting Partners", " AWS Artifacts"]
    },
    {
      pregunta: "Which AWS service or tool should a company use to centrally request and track service limit increases?",
      opciones: ["*Service Quotas", " AWS Config", " AWS Service Catalog", " AWS Budgets"]
    },
    {
      pregunta: "Which documentation does AWS Artifact provide?",
      opciones: ["*AWS ISO certifications", " Amazon EC2 terms and conditions", " A history of a company's AWS spending", " A list of previous-generation Amazon EC2 instance types"]
    },
    {
      pregunta: "Which task requires using AWS account root user credentials?",
      opciones: ["*Changing the AWS Support plan", " Viewing billing information", " Starting and stopping Amazon EC2 instances", " Opening an AWS Support case"]
    },
    {
      pregunta: "A company needs to simultaneously process hundreds of requests from different users. Which combination of AWS services should the company use to build an operationally efficient solution?",
      opciones: ["*Amazon Simple Queue Service (Amazon SQS) and AWS Lambda", " AWS Data Pipeline and Amazon EC2", " Amazon Kinesis and Amazon Athena", " AWS Amplify and AWS AppSync"]
    },
    {
      pregunta: "What is the scope of a VPC within the AWS network?",
      opciones: ["*A VPC can span all Availability Zones within an AWS Region", " A VPC can span all Availability Zones globally", " A VPC must span at least two subnets in each AWS Region", " A VPC must span at least two edge locations in each AWS Region"]
    },
    {
      pregunta: "Which of the following are components of an AWS Site-to-Site VPN connection? (Choose two.)",
      opciones: ["*Virtual private gateway", "*Customer gateway", " AWS Storage Gateway", " NAT gateway", " Internet gateway"]
    },
    {
      pregunta: "A company needs to establish a connection between two VPCs. The VPCs are located in two different AWS Regions. The company wants to use the existing infrastructure of the VPCs for this connection. Which AWS service or feature can be used to establish this connection?",
      opciones: ["*VPC peering", " AWS Client VPN", " AWS Direct Connect", " VPC endpoints"]
    },
    {
      pregunta: "According to the AWS shared responsibility model, what responsibility does a customer have when using Amazon RDS to host a database?",
      opciones: ["*Manage connections to the database", " Install Microsoft SQL Server", " Design encryption-at-rest strategies", " Apply minor database patches"]
    },
    {
      pregunta: "What are some advantages of using Amazon EC2 instances to host applications in the AWS Cloud instead of on premises? (Choose two.)",
      opciones: ["*EC2 has a flexible, pay-as-you-go pricing model", "*EC2 has automatic storage cost optimization", " EC2 includes operating system patch management", " EC2 integrates with Amazon VPC, AWS CloudTrail, and AWS Identity and Access Management (IAM)", " EC2 has a 100% service level agreement (SLA)"]
    },
    {
      pregunta: "A user needs to determine whether an Amazon EC2 instance's security groups were modified in the last month. How can the user see if a change was made?",
      opciones: ["*Use AWS CloudTrail to see if the security group was changed", " Use Amazon EC2 to see if the security group was changed", " Use AWS Identity and Access Management (IAM) to see which user or role changed the security group", " Use Amazon CloudWatch to see if the security group was changed"]
    },
    {
      pregunta: "Which AWS service will help protect applications running on AWS from DDoS attacks?",
      opciones: ["*AWS Shield", " Amazon GuardDuty", " AWS WAF", " Amazon Inspector"]
    },
    {
      pregunta: "Which AWS service or feature acts as a firewall for Amazon EC2 instances?",
      opciones: ["*Security group", " Network ACL", " Elastic network interface", " Amazon VPC"]
    },
    {
      pregunta: "How does the AWS Cloud pricing model differ from the traditional on-premises storage pricing model?",
      opciones: ["*There are no infrastructure operating costs", " There are no upfront cost commitments", " AWS resources do not incur costs", " There are no software licensing costs"]
    },
    {
      pregunta: "A company has a single Amazon EC2 instance. The company wants to adopt a highly available architecture. What can the company do to meet this requirement?",
      opciones: ["*Scale horizontally across multiple Availability Zones", " Scale vertically to a larger EC2 instance size", " Purchase an EC2 Dedicated Instance", " Change the EC2 instance family to a compute optimized instance"]
    },
    {
      pregunta: "A company's on-premises application deployment cycle was 3-4 weeks. After migrating to the AWS Cloud, the company can deploy the application in 2-3 days. Which benefit has this company experienced by moving to the AWS Cloud?",
      opciones: ["*Agility", " Elasticity", " Flexibility", " Resilience"]
    },
    {
      pregunta: "Which of the following are included in AWS Enterprise Support? (Choose two.)",
      opciones: ["*AWS technical account manager (TAM)", "*Support of third-party software integration to AWS", " AWS partner-led support", " AWS Professional Services", " 5-minute response time for critical issues"]
    },
    {
      pregunta: "A global media company uses AWS Organizations to manage multiple AWS accounts. Which AWS service or feature can the company use to limit the access to AWS services for member accounts?",
      opciones: ["*Service control policies (SCPs)", " Organizational units (Ous)", " AWS Identity and Access Management (IAM)", " Access control lists (ACLs)"]
    },
    {
      pregunta: "A company wants to limit its employees' AWS access to a portfolio of predefined AWS resources. Which AWS solution should the company use to meet this requirement?",
      opciones: ["*AWS Service Catalog", " AWS Config", " AWS software development kits (SDKs)", " AWS AppSync"]
    },
    {
      pregunta: "An online company was running a workload on premises and was struggling to launch new products and features. After migrating to the AWS Cloud, the company can quickly launch products and features and can scale its infrastructure as required. Which AWS Cloud value proposition does this scenario describe?",
      opciones: ["*Business agility", " High availability", " Security", " Centralized auditing"]
    },
    {
      pregunta: "Which of the following are advantages of the AWS Cloud? (Choose two.)",
      opciones: ["*Ability to quickly change required capacity", "*High economies of scale", " AWS management of user-owned infrastructure", " Increased deployment time to market", " Increased fixed expenses"]
    },
    {
      pregunta: "AWS has the ability to achieve lower pay-as-you-go pricing by aggregating usage across hundreds of thousands of users. This describes which advantage of the AWS Cloud?",
      opciones: ["*High economies of scale", " Launch globally in minutes", " Increase speed and agility", " No guessing about compute capacity"]
    },
    {
      pregunta: "A company has a database server that is always running. The company hosts the server on Amazon EC2 instances. The instance sizes are suitable for the workload. The workload will run for 1 year. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
      opciones: ["*Standard Reserved Instances", " On-Demand Instances", " Spot Instances", " Convertible Reserved Instances"]
    },
    {
      pregunta: "A company is developing a mobile app that needs a high-performance NoSQL database. Which AWS services could the company use for this database? (Choose two.)",
      opciones: ["*Amazon RDS", "*Amazon DynamoDB", " Amazon Aurora", " Amazon Redshift", " Amazon DocumentDB (with MongoDB compatibility)"]
    },
    {
      pregunta: "Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
      opciones: [
        "*Upgrade the firmware of the network infrastructure","*Maintain the physical security of edge locations",
        " Patch the Amazon EC2 guest operating system",
        " Apply password rotation for IAM users",
        " Maintain least privilege access to the root user account"
      ]
    },
    {
      pregunta: "Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)",
      opciones: [
        "*They are stateless",
        "*They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic",
        " They are stateful",
        " They evaluate all rules before allowing traffic",
        " They operate at the instance level"
      ]
    },
    {
      pregunta: "A company has designed its AWS Cloud infrastructure to run its workloads effectively. The company also has protocols in place to continuously improve supporting processes. Which pillar of the AWS Well-Architected Framework does this scenario represent?",
      opciones: [
        "*Operational excellence",
        " Security",
        " Performance efficiency",
        " Cost optimization"
      ]
    },
    {
      pregunta: "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
      opciones: [
        "*AWS Direct Connect",
        " AWS PrivateLink",
        " Amazon Route 53",
        " Amazon Macie"
      ]
    },
    {
      pregunta: "A company needs to graphically visualize AWS billing and usage over time. The company also needs information about its AWS monthly costs. Which AWS Billing and Cost Management tool provides this data in a graphical format?",
      opciones: [
        "*Cost Explorer",
        " AWS Bills",
        " AWS Cost and Usage Report",
        " AWS Budgets"
      ]
    },
    {
      pregunta: "A company wants to run production workloads on AWS. The company needs concierge service, a designated AWS technical account manager (TAM), and technical support that is available 24 hours a day, 7 days a week. Which AWS Support plan will meet these requirements?",
      opciones: [
        "*AWS Enterprise Support",
        " AWS Basic Support",
        " AWS Business Support",
        " AWS Developer Support"
      ]
    },
    {
      pregunta: "Which architecture design principle describes the need to isolate failures between dependent components in the AWS Cloud?",
      opciones: [
        "*Loosely couple components",
        " Use a monolithic design",
        " Design for automation",
        " Design for single points of failure"
      ]
    },
    {
      pregunta: "Which AWS services are managed database services? (Choose two.)",
      opciones: [
        "*Amazon RDS",
        "*Amazon DynamoDB",
        " Amazon Elastic Block Store (Amazon EBS)",
        " Amazon S3",
        " Amazon Elastic File System (Amazon EFS)"
      ]
    },
    {
      pregunta: "A company is using the AWS Free Tier for several AWS services for an application. What will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?",
      opciones: [
        "*The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage",
        " AWS Support will contact the company to set up standard service charges",
        " The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period",
        " The company's AWS account will be frozen and can be restarted after a payment plan is established"
      ]
    },
    {
      pregunta: "A company recently deployed an Amazon RDS instance in its VPC. The company needs to implement a stateful firewall to limit traffic to the private corporate network. Which AWS service or feature should the company use to limit network traffic directly to its RDS instance?",
      opciones: [
        "*Security groups",
        " AWS WAF",
        " Network ACLs",
        " Amazon GuardDuty"
      ]
    },
    {
      pregunta: "Which AWS service uses machine learning to help discover, monitor, and protect sensitive data that is stored in Amazon S3 buckets?",
      opciones: [
        "*Amazon Macie",
        " AWS Shield",
        " AWS Network Firewall",
        " Amazon Cognito"
      ]
    },
    {
      pregunta: "A company wants to improve the overall availability and performance of its applications that are hosted on AWS. Which AWS service should the company use?",
      opciones: [
        "*AWS Global Accelerator",
        " Amazon Connect",
        " Amazon Lightsail",
        " AWS Storage Gateway"
      ]
    },
    {
      pregunta: "Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?",
      opciones: [
        "*AWS IAM Access Analyzer",
        " AWS Service Catalog",
        " AWS Systems Manager",
        " AWS Organizations"
      ]
    },
    {
      pregunta: "A company does not want to rely on elaborate forecasting to determine its usage of compute resources. Instead, the company wants to pay only for the resources that it uses. The company also needs the ability to increase or decrease its resource usage to meet business requirements. Which pillar of the AWS Well-Architected Framework aligns with these requirements?",
      opciones: [
        "*Cost optimization",
        " Operational excellence",
        " Security",
        " Reliability"
      ]
    },
    {
      pregunta: "A company wants to launch its workload on AWS and requires the system to automatically recover from failure. Which pillar of the AWS Well-Architected Framework includes this requirement?",
      opciones: [
        "*Reliability",
        " Cost optimization",
        " Operational excellence",
        " Performance efficiency"
      ]
    },
    {
      pregunta: "A large enterprise with multiple VPCs in several AWS Regions around the world needs to connect and centrally manage network connectivity between its VPCs. Which AWS service or feature meets these requirements?",
      opciones: [
        "*AWS Transit Gateway",
        " AWS Direct Connect",
        " AWS Site-to-Site VPN",
        " VPC endpoints"
      ]
    },
    {
      pregunta: "Which AWS service supports the creation of visual reports from AWS Cost and Usage Report data?",
      opciones: [
        "*Amazon QuickSight",
        " Amazon Athena",
        " Amazon CloudWatch",
        " AWS Organizations"
      ]
    },
    {
      pregunta: "Which AWS service should be used to monitor Amazon EC2 instances for CPU and network utilization?",
      opciones: [
        "*Amazon CloudWatch",
        " Amazon Inspector",
        " AWS CloudTrail",
        " AWS Config"
      ]
    },
    {
      pregunta: "A company is preparing to launch a new web store that is expected to receive high traffic for an upcoming event. The web store runs only on AWS, and the company has an AWS Enterprise Support plan. Which AWS resource will provide guidance about how the company should scale its architecture and operational support during the event?",
      opciones: [
        "*AWS infrastructure event management",
        " The designated AWS technical account manager (TAM)",
        " AWS Abuse team",
        " AWS Professional Services"
      ]
    },
    {
      pregunta: "A user wants to deploy a service to the AWS Cloud by using infrastructure-as-code (IaC) principles. Which AWS service can be used to meet this requirement?",
      opciones: [
        "*AWS CloudFormation",
        " AWS Systems Manager",
        " AWS CodeCommit",
        " AWS Config"
      ]
    }
    
  ];


  constructor() {
    this.preguntasAleatorias = this.obtenerPreguntasAleatorias();
    this.preguntasSeleccionadas = this.preguntasAleatorias.slice(0, 5);
    this.respuestasSeleccionadas = new Array(this.preguntasSeleccionadas.length).fill([]);
    this.randomizarOpcionesRespuestas();
  }

  obtenerPreguntasAleatorias(): Pregunta[] {
    return this.preguntas.sort(() => Math.random() - 0.5);
  }

  randomizarOpcionesRespuestas() {
    this.preguntasSeleccionadas.forEach(pregunta => {
      const opciones = pregunta.opciones.slice(); // Copia las opciones originales
      for (let i = opciones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opciones[i], opciones[j]] = [opciones[j], opciones[i]]; // Intercambia las opciones de posición
      }
      pregunta.opciones = opciones;
    });
  }

  verificarRespuestas(pregunta: Pregunta): boolean {
    const respuestasObligatorias = pregunta.opciones.filter(opcion => opcion.startsWith('*'));
    const respuestasSeleccionadas = this.respuestasSeleccionadas[this.preguntaActual] || [];
    return (
      respuestasObligatorias.length === respuestasSeleccionadas.length &&
      respuestasObligatorias.every(opcion => respuestasSeleccionadas.includes(opcion))
    );
  }

  siguientePregunta() {
    this.preguntaActual++;
    this.mostrarSiguiente = false;
    this.mostrarRespuestaIncorrecta = false;

    if (this.preguntaActual === this.preguntasSeleccionadas.length) {
      this.mostrarPreguntas = false;
      this.preguntasCompletadas = true;
    }
  }

  seleccionarRespuesta(opcion: string) {
    const respuestasSeleccionadas = [...(this.respuestasSeleccionadas[this.preguntaActual] || [])];

    if (respuestasSeleccionadas.includes(opcion)) {
      const index = respuestasSeleccionadas.indexOf(opcion);
      respuestasSeleccionadas.splice(index, 1);
    } else {
      respuestasSeleccionadas.push(opcion);
    }

    this.respuestasSeleccionadas[this.preguntaActual] = respuestasSeleccionadas;
    this.mostrarRespuestaIncorrecta = !this.verificarRespuestas(this.preguntasSeleccionadas[this.preguntaActual]);
    this.mostrarSiguiente = !this.mostrarRespuestaIncorrecta;
  }

  reiniciarPrueba() {
    this.preguntasAleatorias = this.obtenerPreguntasAleatorias();
    this.preguntasSeleccionadas = this.preguntasAleatorias.slice(0, 3);
    this.respuestasSeleccionadas = new Array(this.preguntasSeleccionadas.length).fill([]);
    this.preguntaActual = 0;
    this.mostrarRespuestaIncorrecta = false;
    this.mostrarSiguiente = false;
    this.mostrarPreguntas = true;
    this.preguntasCompletadas = false;
    this.mostrarGracias = false;
    this.mostrarPreguntaVolver = true;
    this.randomizarOpcionesRespuestas();
  }

  despedirse() {
    this.mostrarGracias = true;
    this.mostrarPreguntaVolver = false;
    this.mostrarPreguntas = false;
    this.preguntasCompletadas = false;
  }
}
