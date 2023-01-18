import time
import random

class Scooter:
    speed = 0
    maxSpeed = 10

    def __init__(self, id, battery, position, live, active, service, zone, lastUser):
        self.id = id
        self.battery = battery
        self.position = position
        self.live = bool(live)
        self.active = bool(active)
        self.service = bool(service)
        self.zone = zone
        self.lastUser = lastUser
    
    def accelerate(self, increase):
        self.speed += increase
    
    def deAccelerate(self, decrease):
        self.speed -= decrease
    
    def stop(self):
        self.speed = 0
    
    def updateData(self, battery, position, active, zone, lastUser):
        self.battery = battery
        self.position = position
        self.active = bool(active)
        self.zone = zone
        self.lastUser = lastUser
    
    def scooterLoop(self):
        while True:
            while self.live:
                if self.speed > 0:
                    self.battery -= 5
                    if (not self.service):
                        serviceValue = random.randint(1, 100)
                        self.service = True if serviceValue <= 5 else False
                    time.sleep(30)
