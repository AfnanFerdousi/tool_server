import jwt, { JwtPayload, Secret } from "jsonwebtoken";

class JWT {
  createToken = (
    payload: Record<string, unknown>,
    secret: Secret,
    expireTime: string
  ): string => {
    return jwt.sign(payload, secret, {
      expiresIn: expireTime,
    });
  };

  verifyToken = (token: string, secret: Secret): JwtPayload => {
    console.log(secret)
    return jwt.verify(token, secret) as JwtPayload;
  };
}

export const JWTHelper = new JWT();
