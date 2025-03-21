docker build -t spiritchess.cn:latest .
docker run -d --name=spiritchess.cn -p 3000:3000 --network spiritchess_env_spiritchess spiritchess.cn:latest