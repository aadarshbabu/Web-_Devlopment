# Generated by Django 3.2.2 on 2021-05-24 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='test',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tid', models.IntegerField()),
                ('name', models.CharField(max_length=50, verbose_name='Hello')),
            ],
        ),
    ]
