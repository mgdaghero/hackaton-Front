#!/bin/bash
echo "===== assuming permissions => $ROLE_ARN ====="
KST=(`aws sts assume-role --role-arn $ROLE_ARN --role-session-name $ROLE_SESSION_NAME --query '[Credentials.AccessKeyId,Credentials.SecretAccessKey,Credentials.SessionToken]' --output text`)
export AWS_DEFAULT_REGION=$AWS_REGION
export AWS_ACCESS_KEY_ID=${KST[0]}
export AWS_SECRET_ACCESS_KEY=${KST[1]}
export AWS_SESSION_TOKEN=${KST[2]}
