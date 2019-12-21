export class AppAuth {
  constructor(container) {
    this._container = $(container)
    this._container.html(`
    <p>Glimpse uses aws node sdk to cmmunicate with cloud to</p>
    <ul>
      <li>See through all configured aws accounts</li>
      <li>List various resources like ec2, asg, ecs and more.</li>
      <li>Fetch available Cloudwatch metrics for the resouces</li>
    </ul>
    <p>This can be configured following recommendation by aws for ccommand line tool.</p>
    <h3>(only if you haven't already configured aws cli on your machine)</h3>
    <p>We recommend installing aws cli tool and configure its authentication following this official <a target="_blank" href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html">Configuring the AWS CLI</a> documentaion</p>
    <p>Once configured <button>Test for connection</button></P>
    `)    
  }
}
