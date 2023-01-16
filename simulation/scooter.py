class Scooter:
    def __init__(self, id, battery, position, live, active, service, zone, lastUser):
        self.id = id
        self.battery = battery
        self.position = position
        self.live = bool(live)
        self.active = bool(active)
        self.service = bool(service)
        self.zone = zone
        self.lastUser = lastUser