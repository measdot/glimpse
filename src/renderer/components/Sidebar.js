export class Sidebar {
  constructor(container, state) {
    this._w2gridInstance = $(container).w2grid({
      name: "grid",
      show: { 
        selectColumn: true, 
        footer: true
      },
      multiSelect: true,
      columns: [
        { field: "accounts", caption: "Accounts", size: "100" },
        { field: "services", caption: "Services", size: "80" }
      ]
    });

    this._w2gridInstance.add([
      {
        recid: 1,
        accounts: "Stage",
        services: "EC2"
      },
      {
        recid: 2,
        accounts: "Stage",
        services: "RDS"
      },
      {
        recid: 3,
        accounts: "Stage",
        services: "ASG"
      },
      {
        recid: 4,
        accounts: "Stage",
        services: "ECS"
      },
      {
        recid: 5,
        accounts: "Stage",
        services: "ALB"
      }
    ]);

    this._w2gridInstance.add([
      {
        recid: 11,
        accounts: "Prod",
        services: "EC2"
      },
      {
        recid: 22,
        accounts: "Prod",
        services: "RDS"
      },
      {
        recid: 33,
        accounts: "Prod",
        services: "ASG"
      },
      {
        recid: 44,
        accounts: "Prod",
        services: "ECS"
      },
      {
        recid: 55,
        accounts: "Prod",
        services: "ALB"
      }
    ]);

    this._w2gridInstance.add([
      {
        recid: 111,
        accounts: "Dev",
        services: "EC2"
      },
      {
        recid: 222,
        accounts: "Dev",
        services: "RDS"
      },
      {
        recid: 333,
        accounts: "Dev",
        services: "ASG"
      },
      {
        recid: 444,
        accounts: "Dev",
        services: "ECS"
      },
      {
        recid: 555,
        accounts: "Dev",
        services: "ALB"
      }
    ]);

    this._w2gridInstance.add([
      {
        recid: 1111,
        accounts: "Team",
        services: "EC2"
      },
      {
        recid: 2222,
        accounts: "Team",
        services: "RDS"
      },
      {
        recid: 3333,
        accounts: "Team",
        services: "ASG"
      },
      {
        recid: 4444,
        accounts: "Team",
        services: "ECS"
      },
      {
        recid: 5555,
        accounts: "Team",
        services: "ALB"
      }
    ]);
  }
}
