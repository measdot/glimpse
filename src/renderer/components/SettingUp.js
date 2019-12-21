
export class SettingUp {
  constructor(container, state) {
    // container.getElement().css('top','5px')
    container.getElement().html(`
    <p>Glimpse uses aws node sdk to cmmunicate with cloud to</p>
    <ol>
      <li>[read only] see through all configured aws accounts</li>
      <li>[read only] list various resources like ec2, asg, ecs and more.</li>
      <li>[read only] fetch available Cloudwatch metrics for the resouces</li>
    </ol>
    <p>These permissions can be configured following recommendation by aws for installing and configuring its command line tool</p>
    <h3>(only if you haven't already configured aws cli on your machine)</h3>
    <p>We recommend installing aws cli tool and configure its authentication following this official <a target="_blank" href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html">Configuring the AWS CLI</a> documentaion</p>
    <p>Once configured <button class="btn btn-primary btn-sm" >Test Connection Now</button></P>
    `);
    
    return "";
  }
}