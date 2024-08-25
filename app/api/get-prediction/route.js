import { getInputData } from '@/lib/decInputData';
import { getAccessToken } from '@/lib/tokenManager';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
     
        const {
            cropType, location, soilType, temperature, rainfall
        } = await request.json();
        
        if (!cropType ||  !location || !soilType || !temperature || !rainfall) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const response = await generateText({cropType, location, soilType, temperature, rainfall})
        const generatedJSON = JSON.parse(response.results[0].generated_text)
        return NextResponse.json(generatedJSON, { status: 200 });
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error?.message);
        return NextResponse.json({ error: 'Error from Server' }, { status: 500 });
    }
}


const generateText = async ({cropType, location, soilType, temperature, rainfall}) => {
  
    const prompt = `Input: Crop Type: ${cropType}
    Location: ${location}
    Soil Type: ${soilType}
    Temperature: ${temperature}
    Rainfall: ${rainfall}
    Output:`;
    const access_token = await getAccessToken()
      const headers = {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
      };
      const inputData = getInputData();
      const body = {
          input:inputData +prompt,
          parameters: {
              decoding_method: "greedy",
              max_new_tokens: 200,
              min_new_tokens: 0,
              stop_sequences: [
                  "\n\n"
              ],
              repetition_penalty: 1
          },
          model_id: process.env.NEXT_PUBLIC_IBM_MODEL_ID,
          project_id: process.env.NEXT_PUBLIC_IBM_PROJECT_ID,
          moderations: {
              hap: {
                  input: {
                      enabled: true,
                      threshold: 0.5,
                      mask: {
                          remove_entity_value: true
                      }
                  },
                  output: {
                      enabled: true,
                      threshold: 0.5,
                      mask: {
                          remove_entity_value: true
                      }
                  }
              }
          }
      };
  
      const response = await fetch(process.env.NEXT_PUBLIC_API_REQUEST_URL, {
          headers,
          method: "POST",
          body: JSON.stringify(body)
      });  
      if (!response.ok) {
          throw new Error("Non-200 response");
      }
  
      return await response.json();
  }