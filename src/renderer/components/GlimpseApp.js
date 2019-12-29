import { AppLanding } from "./AppLanding";

export class GlimpseApp {
  constructor(
    app = [
      {
        module: "AWS Services",
        type: "aws-services",
        services: [
          {
            namespace: "AWS/EC2",
            source: "read async from store",
            tools: {
              metricNames: ["CPUUtilization", "NetworkIn"],
              logGroups: ["SSH Session"]
            }
          },
          { name: "ASG" },
          { name: "RDS" }
        ]
      },
      {
        module: "Help",
        type: "app-services",
        services: [
          { namespace: "How To?", source: "panel-how-to" },
          { namespace: "FAQs", source: "panel-faqs" },
          { namespace: "Feedback", source: "panel-feedback" }
        ]
      }
    ]
  ) {
    this.config = app;
  }
}
