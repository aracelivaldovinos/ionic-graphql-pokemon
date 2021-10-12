import {gql} from '@apollo/client';

export const GET_SPACEX_QUERY = gql `
query ($find: LaunchFind) {
  launchesPast(find: $find) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
    }
  }
}
`
