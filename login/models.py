from django.db import models

""" 
from login.models import UsersCollection as UC
"""


# Create your models here.
class UsersCollection(models.Model):
    user_id = models.CharField(max_length=100, blank=False, unique=True)
    user_profile_link = models.URLField()  # first_name + last_name(camelcase)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    profile_picture_url = models.URLField()  # ImageField? or standard char/text field
    description = models.TextField()


    def __str__(self):
        return self.user_id

    def get_full_name(self):
        return '%s %s' % (self.first_name, self.last_name)

    # Grabs users by filtering rows in DB for those that match user_id, first_name, last_name
    # Second parameter sets if string list of names to be returned, else QuerySet
    def search_user(terms, names_only):
        if (names_only == True):
            query = UsersCollection.objects.filter(
                user_id__icontains=terms) | UsersCollection.objects.filter(
                first_name__icontains=terms) | UsersCollection.objects.filter(
                last_name__icontains=terms)
            query_list = []
            for row in query:
                query_list.append('%s %s' % (row.first_name, row.last_name))
            return query_list
        else:
            return UsersCollection.objects.filter(
                user_id__icontains=terms) | UsersCollection.objects.filter(
                first_name__icontains=terms) | UsersCollection.objects.filter(
                last_name__icontains=terms)

    # Add new user to DB for sign-up. Auto-populate links/urls
    # Returns ID (index) of user added to DB
    def set_user(user_id, first_name, last_name):
        try:
            row = UsersCollection(user_id=user_id, first_name=first_name,
                                  last_name=last_name)
            row.save()
        except Exception:
            pass
        return row.id

