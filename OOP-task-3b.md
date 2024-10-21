Outline objects, attributes and methods for your workplace (students, workshops, tutors, venues).

#### object:
student

#### attributes:
- id (number)
- name (string)
- contact_info ({email: string, phone: number})
- age (number)
- workshops ([array of workshop ids])
- is_alumni (bool)
- is_employed (string)

#### methods: 
view_info, edit_info, add_workshop, set_alumni_status, set_employment_status

#### object:
workshop

#### attributes:
- id (number)
- type (string) tech, creative, workplace
- description (string)
- max_occupants (number)
- location ({lat: number, long: number})
- attendees ([array referencing students])
- is_boosted (bool)

#### methods:
create_workshop, edit_workshop, add_attendee, boost_listing, set_max_occupants

#### object:
tutor

#### attributes:
- id (number)
- name (string)
- contact_info ({email: string, phone: number})
- DBS (bool)
- workshops ([array of workshop ids])
- is_alumni (bool)
- equipment ([array of equipment])

#### methods: 
view_info, edit_info, add_workshop, set_alumni_status, set_DBS_status, add_equipment

#### object:
venue

#### attributes:
- id (number)
- type (string) library, community_centre, office, event_space
- max_occupants (number)
- equipment ({chairs: number, tables: number})
- projector_space (bool)
- location ({lat: number, long: number})
- contact_info ({name: string, email: string, phone: number})

#### methods:
create_venue, edit_venue, set_max_occupants