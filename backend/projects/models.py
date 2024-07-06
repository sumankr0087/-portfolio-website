from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.TextField()
    image = models.ImageField(upload_to='static/projects')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
