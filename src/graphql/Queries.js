import { gpl } from "@apollo/client";

export const GET_WEATER_QUERY = gpl`
    query getCityByName($name:String){
        getCityByName(name:$name){
            name
            country
            weather{
                summary{
                    title
                    description
                    icon
                }
                temperature{
                    actual
                    feelsLike
                    min
                    max
                }
                wind{
                    speed
                    deg
                }
                clouds{
                    all
                    visibility
                    humidity
                }
                timezone
            }
        }
    }
`;
