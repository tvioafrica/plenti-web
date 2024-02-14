// interfaces/UserInfo.ts

export interface UserInfo {
  access_token: string;
  token_type: string;
  expires_at: string;
  username: String;
  first_name:String
  last_name: string;
  email: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  // Add other data properties as needed
}
