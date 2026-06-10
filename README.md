# project1
import sys

def get_weather(city):
    """模拟获取天气信息的函数"""
    # 这里为了简单直接返回模拟数据，实际开发中可以调用天气 API
    weather_data = {
        "北京": "晴天, 25°C",
        "上海": "多云, 28°C",
        "广州": "阵雨, 30°C",
        "深圳": "雷阵雨, 31°C"
    }
    return weather_data.get(city, "抱歉，暂未收录该城市的天气信息。")

def main():
    print("--- 欢迎使用简易天气查询工具 ---")
    if len(sys.argv) > 1:
        city = sys.argv[1]
    else:
        city = input("请输入你想查询的城市名称 (例如: 北京): ").strip()
    
    if not city:
        print("城市名称不能为空！")
        return

    print(f"正在查询 [{city}] 的天气...")
    result = get_weather(city)
    print(f"查询结果: {result}")

if __name__ == "__main__":
    main()
