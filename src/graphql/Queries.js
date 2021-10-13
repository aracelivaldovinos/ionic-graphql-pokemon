import {gql} from '@apollo/client';

export const GET_SPACEX_QUERY = gql `
query Query($find: LaunchFind, $order: String) {
  launchesPast(find: $find, order: $order) {
    mission_name
    id
    rocket {
      rocket_name
      rocket {
        height {
          feet
          meters
        }
        diameter {
          feet
          meters
        }
        cost_per_launch
        engines {
          propellant_1
          propellant_2
          thrust_to_weight
        }
      }
    }
  }
}
`


